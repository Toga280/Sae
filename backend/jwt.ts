import crypto from 'crypto';


// Interface pour le payload du token
interface JWT_Payload {
    role: string;
    nom: string;
    prenom: string;
    // Autres propriétés du payload, si nécessaire
}

export const secretKey = "8.8cm Flak 37 Selbstfahrlafette auf 18 ton Zugkraftwagen";
// Fonction pour générer un JWT
export function generateJWT(payload: any, secretKey: string, expiresIn: string): string {
    try {
        // Encodage du payload en base64
        const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');

        // Encodage de l'en-tête en base64
        const base64Header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');

        // Concaténation de l'en-tête, du payload et du secret
        const signature = `${base64Header}.${base64Payload}`;
        const encryptedSignature = crypto.createHmac('sha256', secretKey).update(signature).digest('base64');

        // Assemblage du JWT
        const token = `${base64Header}.${base64Payload}.${encryptedSignature}`;

        return token;
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la génération du JWT:", error);
        throw new Error("Erreur lors de la génération du JWT");
    }
}

// Fonction pour vérifier la validité du token JWT et récupérer le payload
export function verifyJWT(token: string, secretKey: string): { valid: boolean, payload?: any } {
    try {
        // Diviser le token en ses parties : en-tête, payload et signature
        const [encodedHeader, encodedPayload, signature] = token.split('.');

        // Décoder l'en-tête et le payload (en base64)
        const decodedHeader = Buffer.from(encodedHeader, 'base64').toString();
        const decodedPayload = Buffer.from(encodedPayload, 'base64').toString();

        // Vérifier la signature
        const computedSignature = computeSignature(encodedHeader, encodedPayload, secretKey);
        if (computedSignature !== signature) {
            // La signature ne correspond pas, le token est invalide
            return { valid: false };
        }

        // Vérifier la date d'expiration du payload (s'il est présent)
        const payload = JSON.parse(decodedPayload);
        if (payload.exp) {
            const currentTimestamp = Math.floor(Date.now() / 1000);
            if (currentTimestamp > payload.exp) {
                // La date d'expiration est dépassée, le token est invalide
                return { valid: false };
            }
        }

        // Le token est valide, renvoyer le payload
        return { valid: true, payload: payload };
    } catch (error) {
        // Si une erreur survient, le token est invalide
        return { valid: false };
    }
}

// Fonction pour calculer la signature HMAC
function computeSignature(encodedHeader: string, encodedPayload: string, secretKey: string): string {
    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(signatureInput);
    return hmac.digest('base64');
}
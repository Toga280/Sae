import crypto from 'crypto';

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
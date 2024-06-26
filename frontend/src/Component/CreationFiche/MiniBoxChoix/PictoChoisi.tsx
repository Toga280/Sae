import React, { useEffect, useState } from "react";
import axios from 'axios';
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
const token = localStorage.getItem('token');

function PictoChoisi({ numeroMiniBox}: any) {
    const [imagePath, setImagePath] = useState<string | null>(null);
    useEffect(() => {
        const getPictoFile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/GET/getpicto-file', {
                    params: {
                        name: fonctionsMiniBoxInfoJson.getNomPicto(numeroMiniBox),
                        token: token,
                    },
                    responseType: 'blob',
                });

                
                const imageUrl = URL.createObjectURL(response.data);

                setImagePath(imageUrl);
            } catch (error) {
                console.error('Erreur lors de la récupération du fichier image :', error);
            }
        };

        getPictoFile();
    }, [numeroMiniBox, fonctionsMiniBoxInfoJson.getNomPicto(numeroMiniBox)]);

    return (
        <div>
            {imagePath && (
                <img
                    src={imagePath}
                    alt="pictogramme"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
            )}
        </div>
    );
}

export default PictoChoisi;

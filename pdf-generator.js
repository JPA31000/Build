// js/pdf-generator.js

/**
 * Génère un PDF pour le professeur avec tous les détails de la séance.
 * @param {object} sessionData - L'objet de session contenant les sélections.
 */
export function generatePdfForProf(sessionData) {
    const {
        phase,
        activite,
        tache,
        problematique,
        resultatAttendu,
        competenceVisee,
        ressourceOnDonne,
        competenceDetails // Accès direct aux détails de la compétence si stockés
    } = sessionData;

    // Création du contenu HTML pour le PDF
    let content = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">Séance Pédagogique TEBAA - Version Professeur</h1>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Résumé de la Séance</h2>
                <p><strong>Phase :</strong> ${phase || 'Non sélectionné'}</p>
                <p><strong>Activité :</strong> ${activite || 'Non sélectionné'}</p>
                <p><strong>Tâche :</strong> ${tache || 'Non sélectionné'}</p>
                <p><strong>Problématique :</strong> ${problematique || 'Non sélectionné'}</p>
                <p><strong>Résultat attendu :</strong> ${resultatAttendu || 'Non sélectionné'}</p>
                <p><strong>Compétence visée :</strong> ${competenceVisee || 'Non sélectionné'}</p>
                <p><strong>Ressource "On donne" :</strong> ${ressourceOnDonne || 'Non sélectionné'}</p>
            </div>

            ${competenceDetails ? `
            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Détails de la Compétence Visée</h2>
                <p><strong>Être capable de :</strong> ${competenceDetails.etreCapable || 'N/A'}</p>
                <p><strong>Conditions / Ressources :</strong> ${competenceDetails.conditionsRessources || 'N/A'}</p>
                <p><strong>Critères d'évaluation :</strong> ${competenceDetails.criteresEvaluation || 'N/A'}</p>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; color: #7f8c8d; font-size: 0.9em;">
                <p>Date de génération : ${new Date().toLocaleDateString()}</p>
                <p>Fiche générée par l'outil Concepteur de Séances Pédagogiques TEBAA</p>
            </div>
        </div>
    `;

    // Configuration pour html2pdf
    const options = {
        margin: 10,
        filename: `fiche_prof_${phase.replace(/[^a-zA-Z0-9]/g, '_')}_${activite.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Génération du PDF
    html2pdf().set(options).from(content).save();
}

/**
 * Génère un PDF pour l'élève avec un résumé simplifié de la séance.
 * @param {object} sessionData - L'objet de session contenant les sélections.
 */
export function generatePdfForEleve(sessionData) {
    const {
        phase,
        activite,
        tache,
        problematique,
        resultatAttendu,
        ressourceOnDonne
    } = sessionData;

    let content = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">Séance Pédagogique TEBAA - Version Élève</h1>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Informations de la Séance</h2>
                <p><strong>Phase :</strong> ${phase || 'À définir'}</p>
                <p><strong>Activité :</strong> ${activite || 'À définir'}</p>
                <p><strong>Tâche :</strong> ${tache || 'À définir'}</p>
            </div>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Objectifs Pédagogiques</h2>
                <p><strong>Problématique à aborder :</strong> ${problematique || 'À définir'}</p>
                <p><strong>Ce qui est attendu :</strong> ${resultatAttendu || 'À définir'}</p>
            </div>

            <div style="margin-bottom: 25px; border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                <h2 style="color: #3498db; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Ressources Fournies</h2>
                <p>${ressourceOnDonne || 'Aucune ressource spécifique mentionnée'}</p>
            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; color: #7f8c8d; font-size: 0.9em;">
                <p>Date de génération : ${new Date().toLocaleDateString()}</p>
                <p>Fiche générée par l'outil Concepteur de Séances Pédagogiques TEBAA</p>
            </div>
        </div>
    `;

    // Configuration pour html2pdf
    const options = {
        margin: 10,
        filename: `fiche_eleve_${phase.replace(/[^a-zA-Z0-9]/g, '_')}_${activite.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Génération du PDF
    html2pdf().set(options).from(content).save();
}
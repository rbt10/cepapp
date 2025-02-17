import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import Cellules from "@/api/Cellules";

const CelluleScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <ImageBackground
                    source={require('../assets/images/cellule.png')}
                    style={styles.headerBackground}
                    imageStyle={{ resizeMode: 'cover' }}
                >
                    <Text style={styles.headerText}>Cellules de l'Église</Text>
                </ImageBackground>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.tableTitle}>
                    Nous nous retrouvons par petits groupes chaque jeudi de 19h à 20h,
                    pour passer des moments de partage et de communion fraternelle.
                    Si vous souhaitez intégrer une cellule de maison,
                    veuillez contacter le responsable de votre secteur.
                </Text>

                <Text style={styles.warning}>
                    ⚠️ En raison de la crise sanitaire, les temps de partage se font uniquement en visioconférence.
                    Veuillez vous rapprocher du responsable de cellule pour plus d’informations.
                </Text>

                {/* 📍 Affichage des cellules en France */}
                <Text style={styles.regionTitle}>📍 Cellules en France</Text>
                {Cellules.France.map((departement, deptIndex) => (
                    <View key={deptIndex} style={styles.departmentBlock}>
                        <Text style={styles.departmentTitle}>{departement.departement}</Text>
                        {departement.cellules.map((cellule, cellIndex) => (
                            <View key={cellIndex} style={styles.celluleBlock}>
                                <Text style={styles.celluleTitle}>{cellule.title}</Text>
                                {cellule.adresse && <Text style={styles.celluleDescription}>📍 Adresse : {cellule.adresse}</Text>}
                                <Text style={styles.celluleDescription}>👤 Responsable : {Array.isArray(cellule.responsable) ? cellule.responsable.join(', ') : cellule.responsable}</Text>
                                <Text style={styles.celluleDescription}>📞 Contact : {Array.isArray(cellule.contact) ? cellule.contact.join(' / ') : cellule.contact}</Text>
                                {cellule.hote && <Text style={styles.celluleDescription}>🏠 Hôte : {cellule.hote}</Text>}
                            </View>
                        ))}
                    </View>
                ))}

                {/* 🌍 Affichage des cellules Internationales */}
                <Text style={styles.regionTitle}>🌍 Cellules Internationales</Text>
                {Cellules.International.map((cellule, index) => (
                    <View key={index} style={styles.celluleBlock}>
                        <Text style={styles.celluleTitle}>{cellule.title}</Text>
                        <Text style={styles.celluleDescription}>👤 Responsable : {cellule.responsable}</Text>
                        <Text style={styles.celluleDescription}>📞 Contact : {cellule.contact}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    contentContainer: {
        flexGrow: 1,
        padding: 20,
     
    },
    headerContainer: {
        width: '100%',
        marginBottom: 20,
    },
    headerBackground: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    warning: {
        fontSize: 16,
        color: '#d9534f',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    regionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0077b6',
    },
    departmentBlock: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f9eae1',
        borderRadius: 10,
        elevation: 3,
    },
    departmentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    celluleBlock: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    celluleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    celluleDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
});

export default CelluleScreen;

import React from 'react';
import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native';

const ChurchDepartmentsTable = () => {
    const departments = [
        {
            title: "Accueil",
            description: "Ce département est chargé d’accueillir les membres dans l’Église et d’organiser leur installation."
        },
        {
            title: "Finances",
            description: "Gère les finances de l’Église, supervise les offrandes, les dons et prépare les budgets."
        },
        {
            title: "Chorale",
            description: "Coordonne la musique, la louange et l’adoration pendant les services religieux."
        },
        {
            title: "Famille",
            description: "Ce département regroupe les ministères dédiés aux couples, fiancés, hommes, femmes et enfants.",
            ministries: [
                {
                    title: "Ministère des Couples",
                    description: "Le ministère des couples accompagne les couples mariés à faire régner Christ dans leur foyer.",
                    details: "Des générations sans divorce ! Le ministère des couples est là pour accompagner tous les couples mariés à faire régner Christ au sein de leur foyer. Le mariage est une institution divine qui honore Dieu et qui procure le bonheur à ceux qui le cultivent et le gardent."
                },
                {
                    title: "Ministère des Fiancés",
                    description: "Accompagnement des couples vers une vie conjugale basée sur les valeurs chrétiennes.",
                    details: "Le ministère des fiancés joue un rôle crucial dans la préparation des couples à une vie conjugale fondée sur des valeurs chrétiennes, en leur offrant un accompagnement spirituel, émotionnel et pratique pendant leur période de fiançailles."
                },
                {
                    title: "Ministère des Hommes",
                    description: "Former des hommes selon la volonté de Dieu pour diriger leur vie et leur foyer.",
                    details: "L’homme selon la volonté de Dieu est le chef, la tête, le garant de la vision de Dieu. Or, sans tête, le corps ne peut se diriger. En tant que tête, l’homme a pour rôle de diriger sa vie, son foyer, son église et la nation dans les voies du Seigneur."
                },
                {
                    title: "Ministère des Femmes",
                    description: "Encourager les femmes à jouer pleinement leur rôle selon les principes divins.",
                    details: "La femme selon Dieu est une aide pour l’homme, afin que ce dernier accomplisse la vision et le plan de Dieu sur la Terre. Ayant une entière part dans l’héritage du Seigneur, les femmes par ce ministère s’entretiennent, s’aiguisent et se fortifient dans leur rôle."
                },
                {
                    title: "CEP Kids",
                    description: "Un espace dédié à l’éveil et l’enseignement des enfants dans la foi.",
                    details: "Ce ministère est dédié aux enfants, pour leur offrir un cadre éducatif chrétien où ils peuvent grandir spirituellement et socialement."
                }
            ]
        },
        {
            title: "Intercession & délivrance",
            description: "Département dédié à la prière, aux temps de jeûne et aux besoins spirituels spécifiques."
        },
        {
            title: "Entrepreneuriat",
            description: "Encourage et soutient les initiatives entrepreneuriales des membres de l’Église."
        },
        {
            title: "Evangélisation",
            description: "Promouvoir la mission de l’Église par des campagnes d’évangélisation et des missions humanitaires."
        },
        {
            title: "Cellules de maison",
            description: "Organise des groupes de vie pour favoriser la communion et la croissance spirituelle."
        },
        {
            title: "Médias",
            description: "Gère la communication numérique de l’Église, incluant les réseaux sociaux et le site web."
        },
        {
            title: "Sécurité",
            description: "Supervise la sécurité des membres et des locaux de l’Église."
        },
        {
            title: "Social",
            description: "Soutien aux membres et actions caritatives pour la communauté."
        }
      ];
      

      return (
       
          <View style={styles.headerContainer}>
            <ImageBackground
              source={require('../assets/images/dept.png')}
              style={styles.headerBackground}
              imageStyle={{ resizeMode: 'cover' }}
            
            />

              <ScrollView contentContainerStyle={styles.contentContainer}>
                  <Text style={styles.tableTitle}>Liste des Départements</Text>

                  {departments.map((department, index) => (
                      <View key={index} style={styles.textBlock}>
                          <Text style={styles.departmentTitle}>{department.title}</Text>
                          <Text style={styles.departmentDescription}>{department.description}</Text>

                          {/* Si le département a des ministères, les afficher */}
                          {department.ministries && (
                              <View style={styles.subDepartmentsContainer}>
                                  {department.ministries.map((ministry, index) => (
                                      <View key={index} style={styles.subDepartmentBlock}>
                                          <Text style={styles.subDepartmentTitle}>{ministry.title}</Text>
                                          <Text style={styles.subDepartmentDescription}>{ministry.description}</Text>
                                          <Text style={styles.subDepartmentDetails}>{ministry.details}</Text>
                                      </View>
                                  ))}
                              </View>
                          )}
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
        flex:1
    },
    headerBackground: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    tableTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    departmentRow: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    departmentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    departmentDescription: {
        fontSize: 16,
        color: '#666',
    },
    textBlock: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#f9eae1',
        borderRadius: 10,
        elevation: 3,
    },

    // Nouveau style pour la famille et ses ministères
    subDepartmentsContainer: {
        marginLeft: 20,
        marginTop: 10,
        paddingLeft: 15,
        borderLeftWidth: 3,
        borderLeftColor: '#ffa500',
        paddingBottom: 15,
    },

    subDepartmentBlock: {
        marginBottom: 12,
        padding: 10,
        backgroundColor: '#fef3d7', // légérement différent pour les sous-départements
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    subDepartmentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subDepartmentDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    subDepartmentDetails: {
        fontSize: 12,
        color: '#777',
        lineHeight: 18,
    },

    // Style pour l'ombre et les bordures pour différencier les ministères de la famille
    familyHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});


export default ChurchDepartmentsTable;

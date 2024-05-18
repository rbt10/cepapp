import React from 'react';
import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native';

const ChurchDepartmentsTable = () => {
    const departments = [
        {
          title: 'Accueil',
          description: 'Ce département est chargé d’accueillir les membres dans l’Église et d’organiser leur installation lors des services de l’Église.',
        },
        {
          title: 'Finances',
          description: 'Ce département est responsable de la gestion des finances de l’Église. Il supervise la collecte des offrandes et des dons, tient à jour les comptes financiers, prépare les budgets, et assure la transparence et la responsabilité dans la gestion des ressources financières de l’Église.',
        },
        {
          title: 'Chorale',
          description: 'Ce département est chargé de coordonner les activités liées à la musique, à la louange et à l’adoration lors des services religieux. Il inclut les équipes de musiciens et de choristes.',
        },
        {
          title: 'CEP Kids',
          description: 'Ce département est dédié à répondre aux besoins spirituels, émotionnels et sociaux des enfants de l’Église. Il offre un environnement sûr et engageant où les enfants peuvent apprendre et grandir dans leur foi.',
        },
        {
          title: 'Intercession & délivrance',
          description: 'Ce département est dédié à la prière au sein de l’Église. Il organise des réunions de prière et des temps de jeûne, et encourage les membres à développer une vie de prière régulière. Il accompagne également les personnes dans leurs besoins de prière particuliers (délivrance, cure d’âme, etc.).',
        },
        {
          title: 'Intégration',
          description: 'Ce département est chargé d’accueillir les nouveaux membres dans l’Église et de faciliter leur intégration dans la communauté. Il organise des événements d’accueil, des visites à domicile, et fournit un soutien aux nouveaux convertis.',
        },
        {
          title: 'Entrepreneuriat',
          description: 'Ce département encourage et soutient les initiatives entrepreneuriales au sein de la congrégation. Il offre des ressources, des conseils et des opportunités de réseautage pour aider les membres de l’Église à développer leurs entreprises et à intégrer les principes chrétiens dans le monde des affaires.',
        },
        {
          title: 'Evangélisation',
          description: 'Ce département est chargé de promouvoir l’évangélisation et la mission de l’Église, tant au niveau local qu’international. Il organise des campagnes d’évangélisation, des missions humanitaires, et soutient les missionnaires sur le terrain.',
        },
        {
          title: 'Cellules de maison',
          description: 'Ce département est chargé de coordonner les cellules de maison ou les groupes de vie au sein de l’Église. Il encourage la formation de petites communautés de membres qui se réunissent régulièrement pour étudier la Bible, prier, se soutenir mutuellement et partager leur foi. Ces cellules de maison favorisent la croissance spirituelle et la connexion entre les membres de l’Église.',
        },
        {
          title: 'Médias',
          description: 'Le département des médias gère la présence en ligne et hors ligne de l’Église. Il supervise la production de contenu pour les réseaux sociaux, le site Web de l’Église, les bulletins d’information et d’autres supports de communication. Son objectif est de partager efficacement les événements de l’Église, les enseignements, et les messages pastoraux avec les membres et la communauté.',
        },
        {
          title: 'Ménage',
          description: 'Ce département est responsable de maintenir la propreté et l’ordre dans les locaux de l’Église. Il veille à ce que les espaces de culte, les salles de réunion, les sanitaires et les autres zones communes soient propres et accueillants pour les membres de la congrégation et les visiteurs.',
        },
        {
          title: 'Navette',
          description: 'Ce département organise le transport des membres de l’Église, en particulier ceux qui ont des difficultés à se déplacer. Il coordonne les services de navette pour les personnes âgées, les personnes handicapées ou celles qui n’ont pas de moyen de transport pour se rendre aux services religieux et aux événements de l’Église.',
        },
        {
          title: 'Protocole',
          description: 'Le service de protocole a pour mission principale de soutenir les pasteurs dans l’exercice de ses fonctions pastorales, en veillant à ce que les services religieux se déroulent harmonieusement et que le pasteur dispose de tout le nécessaire pour accomplir son ministère avec efficacité.',
        },
        {
          title: 'Santé',
          description: 'Ce département se concentre sur le bien-être physique, émotionnel et spirituel des membres de l’Église. Il organise des programmes de promotion de la santé, des séminaires sur le bien-être, et offre un soutien pastoral aux personnes confrontées à des défis de santé.',
        },
        {
          title: 'Formations',
          description: 'Le département de la formation propose des programmes d’apprentissage et de développement pour les membres de l’Église. Il offre des cours bibliques, des séminaires théologiques, des ateliers de croissance spirituelle, et d’autres opportunités de formation pour renforcer la foi et l’engagement des membres.',
        },
        {
          title: 'Services Généraux',
          description: 'Ce département gère les aspects logistiques et opérationnels de l’Église. Il s’occupe de la maintenance des bâtiments, de la gestion des équipements, de la planification des événements, et de toute autre tâche nécessaire au bon fonctionnement de l’Église.',
        },
        {
          title: 'Ressources Humaines',
          description: 'Le département des ressources humaines gère les aspects liés au personnel au sein de l’Église. Il supervise le recrutement, la formation, l’évaluation et la rémunération du personnel pastoral et administratif. Il veille également au respect des politiques et des réglementations du travail, ainsi qu’au bien-être des employés de l’Église.',
        },
        {
          title: 'Social',
          description: 'Ce département s’occupe des besoins sociaux des membres de l’Église et de la communauté environnante. Il peut inclure des programmes d’aide sociale, des visites aux personnes âgées ou malades, et d’autres activités caritatives.',
        },
        {
          title: 'Séniors',
          description: 'Ce département s’adresse spécifiquement aux membres âgés de plus de 55 ans de l’Église. Il organise des activités, des groupes de soutien, et des services spécialement conçus pour répondre aux besoins spirituels, sociaux et émotionnels de nos seniors.',
        },
        {
          title: 'Sécurité',
          description: 'Le département de la sécurité est responsable de la sécurité des personnes et des biens au sein de l’Église. Il met en place des mesures de sécurité, supervise les équipes de sécurité lors des services et des événements, et répond aux situations d’urgence ou de crise.',
        },
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
    });

export default ChurchDepartmentsTable;

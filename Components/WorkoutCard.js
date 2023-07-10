   import * as React from 'react'; 
   import { Button, Card, Text } from 'react-native-paper';
   import { StyleSheet, Linking } from 'react-native';
  
   const WorkoutCard = () => (
     <Card style={Styles.container}>
       <Card.Content>
         <Text variant="titleLarge">Workout Planner</Text>
       </Card.Content>
       <Card.Cover source={{ uri: 'https://free-images.com/lg/ae45/training_ropes_workout_fitness.jpg' }} />
       <Text variant="bodyMedium">For help with Workout Plans</Text>
       <Card.Actions>
         <Button
          onPress={() => Linking.openURL('https://madmuscles.com/quiz-workout?pp=mm_100_wu&utm_source=google_search&utm_medium=139878366896&utm_campaign=13599463389&utm_content=613029335659&device=c&utm_term=best+training+app&camp_name=&asn=&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCX7tuTyqTq6rwTHOQA37oBS5_q-u1sTaghp2PMGuYHzcOjpkuaOvQhoC5FUQAvD_BwE')}>
         Explore
         </Button>
       </Card.Actions>
     </Card>
   );
   
   export default WorkoutCard;

   const Styles = StyleSheet.create({
    container :{ 
      justifyContent: 'centre', 
      alignContent:'centre',
      margin:25,
      marginTop:-340,  
      marginLeft:350,
      marginRight:100,
      marginBottom:0, 
      width:250, 
   }})
   
   
 
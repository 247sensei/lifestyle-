   import * as React from 'react'; 
   import { Button, Card, Text } from 'react-native-paper';
   import { StyleSheet, Linking } from 'react-native';
  
   const FirstCard = () => (
     <Card style={Styles.container}>
       <Card.Content>
         <Text variant="titleLarge">Meal Planner</Text>
       </Card.Content>
       <Card.Cover source={{ uri: 'https://free-images.com/lg/c5f4/food_fruits_diet_nutrition.jpg' }} />
       <Text variant="bodyMedium">For help with meal preparation</Text>
       <Card.Actions>
         <Button
          onPress={() => Linking.openURL('https://realfood.tesco.com/meal-planner/edit/my-meal-plan-1846323.html')}>
         Explore
         </Button>
       </Card.Actions>
     </Card>
   );
   
   export default FirstCard;
   const Styles = StyleSheet.create({
    container :{
      justifyContent: 'center', 
      alignContent:'centre',
      margin:25, 
      width:250
   }})
   
   
 
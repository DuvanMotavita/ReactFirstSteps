import type { CSSProperties } from "react";

 const firstName = 'Duvan';
 const lastName = 'Motavita';

 const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Metroid'];
 const isActive = true;

 const address = {
    zipCode: '12345',
    country: 'Colombia',
 }

export const MyAwesomeApp = () => {

  const myStyles:CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: 20,
        padding: 12,
        marginTop: 20
  }

  return (
    <>
        <h1> {firstName} </h1>
        <h3> {lastName} </h3>
        <p> {favoriteGames.join(', ')} </p>
        <h1> {isActive ? 'Active' : 'Inactive'} </h1>
        <p style={myStyles} > { JSON.stringify(address)} </p>
    </>
 )    
}
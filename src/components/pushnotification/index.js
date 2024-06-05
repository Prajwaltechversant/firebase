import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

messaging().requestPermission();


// export const sendPushNotification = async (token) => {
//     const message = {
//         token: token,
//         data: {
//             title: 'Alert',
//             body: 'new login ',
//         },
//     };
//     try {
//         await axios.post('https://fcm.googleapis.com/v1/projects/todo-49338/messages:send',
//             message,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                      'Authorization': 'Bearer AIzaSyBir-H-6jTB8KMI23B7tfbjaTJxSPjmEXE'
//                 }
//             }
//         )
//     }
//     catch (err) {
//         console.log(err, "messaging failed")
//     }
// };


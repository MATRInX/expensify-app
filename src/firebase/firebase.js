import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((snapshotChild) => {
// //             expenses.push({
// //                 id: snapshotChild.key,
// //                 ...snapshotChild.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });
    

// // const expenses = [{
// //     description: 'First desc',
// //     note: '',
// //     amount: 13498,
// //     createdAt: 1250
// // }, {
// //     description: 'Second description',
// //     note: 'Template',
// //     amount: 10500,
// //     createdAt: 56250
// // }, {
// //     description: 'Third description',
// //     note: 'Simple note',
// //     amount: 195000,
// //     createdAt: 1234250
// // }
// // ];

// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     const info = `${val.name} is a ${val.job.title} at ${val.job.company}`;
// //     console.log(info);
// // })

// // setTimeout(() => {
// //     database.ref('name').set('Mike');
// // }, 3500);

// // setTimeout(() => {
// //     database.ref('job/company').set('Google');
// // }, 7000);

// // database.ref().set({
// //     name: 'Marcin wojtania',
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Tarnowskie Góry',
// //         country: 'Poland'
// //     }
// // }).then(() => {
// //     console.log('data is saved.');
// // }).catch((e) => {
// //     console.log('This fail', e);
// // });

// // database.ref('issingle').remove().then(() => {
// //     console.log('Is single attribute have been deleted.');
// // });
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Sosnowiec'
// // }).then(() => {
// //     console.log('update completed.');
// // });
import * as firebase from 'firebase';
import moment from 'moment';

const createdAtBase = moment(0);

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

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   id: '1',
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: moment(createdAtBase).valueOf()
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });

  // database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
//   database.ref().update({ 'job/company': 'Amazon'});
// }, 3000);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Chuck Newberry',
//   age: 57,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Eagle',
//     state: 'WI'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle removed');
//   }).catch((e) => {
//     console.log('error:', e);
//   });

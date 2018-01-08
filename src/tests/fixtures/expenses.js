import moment from 'moment';

const createdAtBase = moment(0);

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(createdAtBase).valueOf()
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 195000,
    createdAt: moment(createdAtBase).subtract(7, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(createdAtBase).add(7, 'days').valueOf()
}];

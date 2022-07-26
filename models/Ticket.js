import mongoose from 'mongoose';

const TicketSchema = mongoose.Schema({

    usermail: String,
    busseats: String,
    busname: String,
    createdAt : {
        type: Date,
        default: new Date()
    },


});

const ticketList = mongoose.model('ticketList', TicketSchema);

export default ticketList;
import ticketList from '../models/Ticket.js';
import mongoose from 'mongoose';

export const getTickets = async (req,res) =>{

    try {

        const tickets = await ticketList.find();

        res.status(200).json(tickets);
        
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }

}

export const bookTicket = async (req,res) =>{

    const ticket = req.body;

    const newTicket = new ticketList(ticket);

    try {

        await newTicket.save();

        res.status(201).json(newTicket);
        
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }

}
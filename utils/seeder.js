import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Task from '../models/Task.js';
import bcryptjs from 'bcryptjs';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();
    const createdUsers = await User.insertMany([
      {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcryptjs.hashSync('123456', 10),
      },
    ]);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = [
      {
        title: 'Complete the Magna project work',
        completed: false,
        user: 1,
        date: new Date('2024-10-01'),
      },
      {
        title: 'Read a chapter from the .NET Microservices book',
        completed: false,
        user: 1,
        date: new Date('2024-10-02'),
      },
      {
        title: 'Start studying microservices architecture in .NET',
        completed: false,
        user: 1,
        date: new Date('2024-10-03'),
      },
      {
        title: 'Fill out the DS course report',
        completed: false,
        user: 1,
        date: new Date('2024-10-04'),
      },
      {
        title: 'Prepare the presentation for the conference',
        completed: false,
        user: 1,
        date: new Date('2024-10-05'),
      },
      {
        title: 'Consolidate knowledge of containerization in .NET',
        completed: false,
        user: 1,
        date: new Date('2024-10-06'),
      },
      {
        title: 'Launch the campaign for Dealder on the Canadian market',
        completed: false,
        user: 1,
        date: new Date('2024-10-07'),
      },
      {
        title: 'Complete work on the TimeSculpt project',
        completed: false,
        user: 1,
        date: new Date('2024-10-08'),
      },
      {
        title: 'Test and fix bugs in the Dealder app',
        completed: false,
        user: 1,
        date: new Date('2024-10-09'),
      },
      {
        title: 'Study LVGL with STM32U575VG',
        completed: false,
        user: 1,
        date: new Date('2024-10-10'),
      },
      {
        title: 'Test the interaction between FSMC and ILI9163C display',
        completed: false,
        user: 1,
        date: new Date('2024-10-11'),
      },
      {
        title: 'Gather feedback from users on the Dealder app',
        completed: false,
        user: 1,
        date: new Date('2024-10-12'),
      },
      {
        title: 'Record a video for the TimeSculpt presentation',
        completed: false,
        user: 1,
        date: new Date('2024-10-13'),
      },
      {
        title: 'Add support for new languages in Dealder',
        completed: false,
        user: 1,
        date: new Date('2024-10-14'),
      },
      {
        title: 'Test the app’s compatibility with Android 12',
        completed: false,
        user: 1,
        date: new Date('2024-10-15'),
      },
      {
        title: 'Finish reading the .NET Microservices book',
        completed: false,
        user: 1,
        date: new Date('2024-10-16'),
      },
      {
        title: 'Configure HSI for STM32U575VG',
        completed: false,
        user: 1,
        date: new Date('2024-10-17'),
      },
      {
        title: 'Write documentation for TimeSculpt',
        completed: false,
        user: 1,
        date: new Date('2024-10-18'),
      },
      {
        title: 'Analyze competitors in the Canadian market for Dealder',
        completed: false,
        user: 1,
        date: new Date('2024-10-19'),
      },
      {
        title: 'Fix bugs in the Magna project code',
        completed: false,
        user: 1,
        date: new Date('2024-10-20'),
      },
      {
        title: 'Fill out the ATIK course report',
        completed: false,
        user: 1,
        date: new Date('2024-10-21'),
      },
      {
        title: 'Present the TimeSculpt project at the conference',
        completed: false,
        user: 1,
        date: new Date('2024-10-22'),
      },
      {
        title: 'Check the Dealder app’s logic after the last update',
        completed: false,
        user: 1,
        date: new Date('2024-10-23'),
      },
      {
        title: 'Start testing the new version of TimeSculpt',
        completed: false,
        user: 1,
        date: new Date('2024-10-24'),
      },
      {
        title: 'Set up a messaging system for Dealder',
        completed: false,
        user: 1,
        date: new Date('2024-10-25'),
      },
      {
        title: 'Complete all planned tasks for the current month',
        completed: false,
        user: 1,
        date: new Date('2024-10-30'),
      },
    ].map((product) => {
      return { ...product, user: adminUser };
    });

    await Task.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

connectDB();
importData();

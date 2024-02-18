import { ICONS } from "../../assets";
import { COLORS } from "../themes";


const brightness = 200;

const preview = [
    {
        id: 134,
        title: "Foundations of Financial Literacy",
        description: "Understanding financial literacy, focusing on personal budgeting",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    },
    {
        id: 124,
        title: "Credit and Debt Management",
        description: "Nuances of credit and debt, offering insights on how to manage credit effectively.",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.5, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    },
    {
        id: 111,
        title: "Foundations of Financial Literacy",
        description: "Understanding financial literacy, focusing on personal budgeting",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    },
    {
        id: 167,
        title: "Foundations of Financial Literacy",
        description: "Understanding financial literacy, focusing on personal budgeting",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg'
    },
];

const categories = [{
    title: 'Saving',
    icon: ICONS.PiggyBank,
    color: COLORS.green[300]
}, {
    title: 'Investing',
    icon: ICONS.Dollar,
    color: COLORS.blue[brightness]
}, {
    title: 'Risk Tolerance',
    icon: ICONS.Bars,
    color: COLORS.plum[brightness]
}
    , {
    title: 'Debt Tolerance',
    icon: ICONS.Award,
    color: COLORS.white[brightness]
}
    , {
    title: 'Debt Management',
    icon: ICONS.Learn,
    color: COLORS.green[700]

}
];

export { preview, categories };
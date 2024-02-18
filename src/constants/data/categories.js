import { ICONS } from "../../assets";
import { COLORS } from "../themes";


const brightness = 200;

export const categories = [{
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
    icon:ICONS.Learn,
    color: COLORS.green[700]

}
];
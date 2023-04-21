import { Appearance } from "react-native";
const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants = {
    familyRegular: 'sans-serif',
    sizeTitle: 18,
    sizeRegular: 14,
    weightBold: 'bold'
};

const ColorConstants = {
    background: isDarkMode ? '#333333': '#efefef',
    backgroundMedium : isDarkMode ? '#666666': '#dddddd',
    font: isDarkMode ? '#eeeeee': '#222222',
    normal: isDarkMode ? '#cccccc': '#cccccc',

   backgroundDark: '#333333',
   backgroundMed: '#666666', 
   iconColor: 'darkblue'
    
};

const SizeConstants = {
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 20,
};

export  {FontConstants, ColorConstants, SizeConstants};
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text : {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fonts.primary,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    title: {
        fontSize: theme.fontSizes.large,
        fontWeight: theme.fontWeights.bold,
    },
    errorText: {
        color: theme.colors.error,
    },
    small: {
        fontSize: theme.fontSizes.small,
    },
});

export default function StyledText({ children, bold, title, error, small, style, ...props }) {
    const textStyle = [
        styles.text,
        bold && styles.bold,
        title && styles.title,
        error && styles.errorText,
        small && styles.small,
        style,
    ];

    return (
        <Text style={textStyle} {...props} >
            {children}
        </Text>
    );
}
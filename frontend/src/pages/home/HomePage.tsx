import React, { useContext } from "react";
import ThemeSwitcher from "../../components/theme/ThemeSwitchButton";
import { useTheme } from "../../contexts/themeContext";
import Screen from "../../components/_basic_components/Screen";


export default function HomePage() {
    const {theme} = useTheme()
    return <Screen theme={theme}>
        <ThemeSwitcher/>
    </Screen>
}
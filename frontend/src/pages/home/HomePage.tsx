import React, { useContext } from "react";
import ThemeSwitcher from "../../components/theme/ThemeSwitchButton";
import Screen from "../../components/_basic_components/Screen";


export default function HomePage() {
    return <Screen navbar={true}>
        <ThemeSwitcher/>
        <h1 className="text-primary">Helló szöveg</h1>
        <h2 className="text-secondary">helló szöveg</h2>
        <p className="text-accent-primary">helló szöveg</p>
        <p className="text-accent-secondary">helló szöveg</p>
        <div className="bg-secondary">hadawda</div>
    </Screen>
}
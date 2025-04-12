import { useState } from "react";

enum MnemonicSystem {
    MAJOR_SYSTEM = "Major system",
    BEN_SYSTEM = "Ben system",
    BNDFGPRKSM = "BNDFGPRKSM",
    NONE = "None",
}

const Mnemonic = () => {

    const [system, setSystem] = useState<MnemonicSystem>(localStorage.getItem('mnemonicSystem') as MnemonicSystem || MnemonicSystem.MAJOR_SYSTEM);

    const getTable = () => {
        switch (system) {
            case MnemonicSystem.NONE:
                return <></>;
            case MnemonicSystem.MAJOR_SYSTEM:
                return (
                    <table>
                        <tr>
                            <th>Number</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <th>Mnemonic</th>
                            <td>s/z</td>
                            <td>t/d/th</td>
                            <td>n</td>
                            <td>m</td>
                            <td>r</td>
                            <td>l</td>
                            <td>ch/j/sh</td>
                            <td>k</td>
                            <td>f/v</td>
                            <td>p/b</td>
                        </tr>
                    </table>
                );
            case MnemonicSystem.BEN_SYSTEM:
                return (
                    <table>
                        <tr>
                            <th>Number</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <th>First sound</th>
                            <td>s</td>
                            <td>t</td>
                            <td>n</td>
                            <td>m</td>
                            <td>r</td>
                            <td>l</td>
                            <td>g/j</td>
                            <td>k</td>
                            <td>f/th</td>
                            <td>b</td>
                        </tr>
                        <tr>
                            <th>Second sound</th>
                            <td>oo</td>
                            <td>ah</td>
                            <td>eh</td>
                            <td>ih</td>
                            <td>awh</td>
                            <td>uh</td>
                            <td>ay</td>
                            <td>ee</td>
                            <td>eye</td>
                            <td>oh</td>
                        </tr>
                        <tr>
                            <th>Third sound</th>
                            <td>s</td>
                            <td>t</td>
                            <td>n</td>
                            <td>m</td>
                            <td>r</td>
                            <td>l</td>
                            <td>g</td>
                            <td>k</td>
                            <td>f/th</td>
                            <td>b</td>
                        </tr>
                    </table>
                );
            case MnemonicSystem.BNDFGPRKSM:
                return (
                    <table>
                        <tr>
                            <th>Number</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <th>First sound</th>
                            <td>b</td>
                            <td>n</td>
                            <td>d</td>
                            <td>f</td>
                            <td>g</td>
                            <td>p</td>
                            <td>r</td>
                            <td>k</td>
                            <td>s</td>
                            <td>m</td>
                        </tr>
                        <tr>
                            <th>Second sound</th>
                            <td>ah</td>
                            <td>eh</td>
                            <td>ih</td>
                            <td>awh</td>
                            <td>uh</td>
                            <td>ay</td>
                            <td>ee</td>
                            <td>eye</td>
                            <td>oh</td>
                            <td>oo</td>
                        </tr>
                        <tr>
                            <th>Third sound</th>
                            <td>b</td>
                            <td>n</td>
                            <td>d</td>
                            <td>f</td>
                            <td>g</td>
                            <td>p</td>
                            <td>r</td>
                            <td>k</td>
                            <td>s</td>
                            <td>m</td>
                        </tr>
                    </table>
                );
        }
    };

    const getLink = () => {
        switch (system) {
            case MnemonicSystem.NONE:
                return <></>;
            case MnemonicSystem.MAJOR_SYSTEM:
                return <a style={{display: 'block', paddingTop: '2px'}} href="https://en.wikipedia.org/wiki/Major_system" target="_blank" rel="noopener noreferrer">Major system</a>;
            case MnemonicSystem.BEN_SYSTEM:
                return <a style={{display: 'block', paddingTop: '2px'}} href="https://artofmemory.com/wiki/Ben_System/" target="_blank" rel="noopener noreferrer">Ben system</a>;
            case MnemonicSystem.BNDFGPRKSM:
                return <></>;
        }
    };

    const updateMnemonicSystem = (newSystem: MnemonicSystem) => {
        setSystem(newSystem);
        localStorage.setItem('mnemonicSystem', newSystem);
    };

    return (
        <div>
            <label htmlFor="Mnemonic systems">Mnemonic systems: </label>
            <select name="Mnemonic systems" id="Mnemonic systems" onChange={(e) => updateMnemonicSystem(e.target.value as MnemonicSystem)} value={system}>
                <option value="None">None</option>
                <option value="Major system">Major system</option>
                <option value="Ben system">Ben system</option>
                <option value="BNDFGPRKSM">BNDFGPRKSM</option>
            </select>
            {getTable()}
            {getLink()}
        </div>
    );
}

export default Mnemonic;

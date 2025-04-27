import React, { useEffect, useMemo, useState } from 'react';
import dots from '../../../../../assets/dots.png';
import { getStreakKey, randomElement } from '../../helpers';
import { BADS, LocalStorageStreakKeys, NICES, QuizType } from '../../constants';
import { KANJI } from './constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const Kanji = (): React.ReactElement => {

    const [mode, setMode] = useState<number>(0); // 0 = furigana, 1 = meaning

    const [enableDirections, setEnableDirections] = useState<boolean>(true);
    const [enablePhysicalAdjectives, setEnablePhysicalAdjectives] = useState<boolean>(true);
    const [enableColors, setEnableColors] = useState<boolean>(true);
    const [enableUrbanDescriptors, setEnableUrbanDescriptors] = useState<boolean>(true);
    const [enableNaturalFeatures, setEnableNaturalFeatures] = useState<boolean>(true);
    const [enableOther, setEnableOther] = useState<boolean>(true);

    const [inputValue, setInputValue] = useState<string>('');

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * KANJI.length));
    const [message, setMessage] = useState<string>('');
    const [messageColor, setMessageColor] = useState<string>("green");

    const getStreakKey = () => {
        return LocalStorageStreakKeys.JAPAN_KANJI + `_${mode}_${enableDirections ? 1 : 0}_${enablePhysicalAdjectives ? 1 : 0}_${enableColors ? 1 : 0}_${enableUrbanDescriptors ? 1 : 0}_${enableNaturalFeatures ? 1 : 0}_${enableOther ? 1 : 0}`;
    }

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(getStreakKey()) ? Number(getStreakKey()) : 0);

    const [lastItems, setLastItems] = useState<number[]>([]);

    /* ----------------- */

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableDirections(!enableDirections);
                break;
            case 1:
                setEnablePhysicalAdjectives(!enablePhysicalAdjectives);
                break;
            case 2:
                setEnableColors(!enableColors);
                break;
            case 3:
                setEnableUrbanDescriptors(!enableUrbanDescriptors);
                break;
            case 4:
                setEnableNaturalFeatures(!enableNaturalFeatures);
                break;
            case 5:
                setEnableOther(!enableOther);
                break;
        }
    }

    // const filteredList = useMemo(() => {
    //     return KANJI.filter((item, index) => {
    //         if (index < 11 && !enableDirections) return false;
    //         if (index >= 11 && index < 21 && !enablePhysicalAdjectives) return false;
    //         if (index >= 21 && index < 30 && !enableColors) return false;
    //         if (index >= 30 && index < 40 && !enableUrbanDescriptors) return false;
    //         if (index >= 40 && index < 63 && !enableNaturalFeatures) return false;
    //         if (index >= 63 && !enableOther) return false;
    //         return true;
    //     });
    // }, [enableDirections, enablePhysicalAdjectives, enableColors, enableUrbanDescriptors, enableNaturalFeatures, enableOther]);

    

    const generateNewFind = () => {
        let newFind = 0;
        let found = false;
        while (!found) {
            newFind = Math.floor(Math.random() * KANJI.length);
            if (newFind === toFind) { continue;}
            if (newFind < 11 && !enableDirections) { continue; }
            if (newFind >= 11 && newFind < 21 && !enablePhysicalAdjectives) { continue; }
            if (newFind >= 21 && newFind < 30 && !enableColors) { continue; }
            if (newFind >= 30 && newFind < 40 && !enableUrbanDescriptors) { continue; }
            if (newFind >= 40 && newFind < 63 && !enableNaturalFeatures) { continue; }
            if (newFind >= 63 && !enableOther) { continue; }
            found = true;
        }
        setToFind(newFind);
    }

    const updateLastItem = () => {
        let newLastItems = [...lastItems];
        if (newLastItems.length >= 15) {
            newLastItems.pop();
        }
        newLastItems.unshift(toFind);
        setLastItems(newLastItems);
    }

    function lose() {
        let newMessage;
        do {
            newMessage = randomElement(BADS)
        } while (newMessage === message)
        setStreak(0);
        setMessage(newMessage);
        setMessageColor("red");
    }

    function giveUp() {
        lose();
        generateNewFind();
        updateLastItem();
        setInputValue('');
    }

    function levenshteinDistance(str1: string, str2: string) {
        const m = str1.length;
        const n = str2.length;
        
        const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
          for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
            } else {
              dp[i][j] = 1 + Math.min(
                dp[i - 1][j],     // deletion
                dp[i][j - 1],     // insertion
                dp[i - 1][j - 1]  // substitution
              );
            }
          }
        }
        
        return dp[m][n];
      }

      function isCloseMatch(array: string[], searchValue: string, maxDistance = 1) {
        const normalizedSearchValue = searchValue.trim().toLowerCase();
        
        for (const item of array) {
          const normalizedItem = item.toLowerCase();
          const distance = levenshteinDistance(normalizedItem, normalizedSearchValue);
          
          if (distance <= maxDistance) {
            return true;
          }
        }
        
        return false;
      }

    const onAnswerSubmit = () => {
        if (inputValue.trim() === '') {
            setMessage("Enter your answer! ⎛⎝>⏝⏝<⎛⎝");
            setMessageColor("orange");
            return;
        }
        if (isCloseMatch(KANJI[toFind][mode + 1] as string[], inputValue.trim().toLowerCase())) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setStreak(streak + 1);
            if (streak + 1 > bestStreak) {
                setBestStreak(streak + 1);
                localStorage.setItem(LocalStorageStreakKeys.JAPAN_KANJI, (streak + 1).toString());
            }
            newMessage += ` Streak: ${streak + 1}, Best Streak: ${streak + 1 > bestStreak ? streak + 1 : bestStreak}`;
            setMessage(newMessage);
            setMessageColor("green");
            updateLastItem();
            generateNewFind();
        } else {
            lose();
        }
    }

    useEffect(() => {
        generateNewFind();
        setStreak(0);
        setBestStreak(localStorage.getItem(getStreakKey()) ? Number(getStreakKey()) : 0);
    }, [enableDirections, enablePhysicalAdjectives, enableColors, enableUrbanDescriptors, enableNaturalFeatures, enableOther]);


    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Kanji</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                Furigana<input type="radio" onChange={() => {setMode(0); setInputValue('');}} checked={mode === 0}></input>
                Meaning<input type="radio" onChange={() => {setMode(1); setInputValue('');}} checked={mode === 1}></input>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{marginTop: '10px', marginBottom: '20px'}}>
                Direction words<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableDirections}></input>
                Physical adjectives<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enablePhysicalAdjectives}></input>
                Colors<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableColors}></input>
                Urban descriptors<input type="checkbox" onChange={() => {changeSetting(3)}} checked={enableUrbanDescriptors}></input>
                Natural features<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableNaturalFeatures}></input>
                Other<input type="checkbox" onChange={() => {changeSetting(5)}} checked={enableOther}></input>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '186px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onAnswerSubmit();
                }}>
                    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    <input type='submit' value='Submit'></input>
                    <input type='button' value='Skip' onClick={(event) => { giveUp(); }}></input>
                </form>
                {(message !== '') && <p style={{color: messageColor}}>{message}</p>}
                <p className='p-old'><span style={{textDecoration: 'underline'}}>Kanji:</span> {KANJI[toFind][0]}</p>
            </div>
            <div style={{border: '1px dashed grey', padding: '5px', height: lastItems.length > 0 ? 'auto' : '286px'}}>
                <p style={{margin: '0px', textDecoration: 'underline'}}>Previous Kanji: </p>
                <ul style={{margin: '0px', paddingInlineStart: '0px'}}>
                    {lastItems.reverse().map((item, index) => {
                        return (
                            <li key={index} style={{listStyleType: 'none'}}>
                                <span className='p-old'>{KANJI[item][0]}: {(KANJI[item][1] as string[]).join(',')}: {(KANJI[item][2] as string[]).join(',')}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default Kanji;

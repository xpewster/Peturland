import React, { useEffect, useMemo, useState } from 'react';
import dots from '../../../../../assets/dots.png';
import { getStreakKey, randomElement, shuffle } from '../../helpers';
import { BADS, LocalStorageStreakKeys, NICES, QuizType } from '../../constants';
import { KANJI, PLACES } from './constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';
import { find, set } from 'lodash';



const Kanji = (): React.ReactElement => {

    const [mode, setMode] = useState<number>(0); // 0 = furigana, 1 = meaning, 2 = real places
    const [multipleChoice, setMultipleChoice] = useState<boolean>(false);

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
    const [choices, setChoices] = useState<string[]>([]);

    const NUM_CHOICES = 4;

    const getStreakKey = () => {
        return LocalStorageStreakKeys.JAPAN_KANJI + `_${mode}_${enableDirections ? 1 : 0}_${enablePhysicalAdjectives ? 1 : 0}_${enableColors ? 1 : 0}_${enableUrbanDescriptors ? 1 : 0}_${enableNaturalFeatures ? 1 : 0}_${enableOther ? 1 : 0}`;
    }

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(getStreakKey()) ? Number(getStreakKey()) : 0);

    const [lastItems, setLastItems] = useState<number[]>([]);
    const [blurLastItems, setBlurLastItems] = useState<boolean>(false);

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

    const validateFind = (find: number) => {
        if (mode === 2) {
            return true;
        }
        if (find < 11 && !enableDirections) { return false; }
        if (find >= 11 && find < 22 && !enablePhysicalAdjectives) { return false; }
        if (find >= 22 && find < 31 && !enableColors) { return false; }
        if (find >= 31 && find < 50 && !enableUrbanDescriptors) { return false; }
        if (find >= 50 && find < 86 && !enableNaturalFeatures) { return false; }
        if (find >= 86 && !enableOther) { return false; }
        return true;
    };

    const generateNewFind = () => {
        let newFind = 0;
        let found = false;
        let tries = 0;
        while (!found) {
            if (mode === 2) {
                newFind = Math.floor(Math.random() * PLACES.length);
                if (tries > 100) {
                    return;
                }
                if (newFind === toFind) { continue;}
                found = true;
            } else {
                newFind = Math.floor(Math.random() * KANJI.length);
                ++tries;
                if (tries > 100) {
                    return;
                }
                if (newFind === toFind) { continue;}
                if (!validateFind(newFind)) { continue; }
                found = true;
            }
        }
        let newChoices: string[];
        if (mode === 2) {
            newChoices = [PLACES[newFind][1]];
            for (let i = 0; i < NUM_CHOICES - 1; i++) {
                let choice = Math.floor(Math.random() * PLACES.length);
                while (choice === newFind || newChoices.includes(PLACES[choice][1]) || !validateFind(choice)) {
                    choice = Math.floor(Math.random() * PLACES.length);
                }
                newChoices.push(PLACES[choice][1]);
            }
        }
        else { 
            newChoices = [KANJI[newFind][mode + 1][Math.floor(Math.random() * 100) % KANJI[newFind][mode + 1].length]];
            for (let i = 0; i < NUM_CHOICES - 1; i++) {
                let choice = Math.floor(Math.random() * KANJI.length);
                const randomIndex = Math.floor(Math.random() * 100);
                while (choice === newFind || newChoices.includes(KANJI[choice][mode + 1][randomIndex % KANJI[choice][mode + 1].length]) || !validateFind(choice)) {
                    choice = Math.floor(Math.random() * KANJI.length);
                }
                newChoices.push(KANJI[choice][mode + 1][randomIndex % KANJI[choice][mode + 1].length]);
            }
        }
        shuffle(newChoices);
        setChoices(newChoices);
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
          const distance = levenshteinDistance(normalizedItem.replaceAll('ō', 'o').replaceAll('-', ''), normalizedSearchValue.replaceAll('ō', 'o').replaceAll('-', ''));
          
          if (distance <= maxDistance) {
            return true;
          }
        }
        
        return false;
      }

    const onAnswerSubmit = (answer?: string, exact?: boolean) => {
        let answerValue = answer ? answer : inputValue.trim().toLowerCase();
        if (answerValue === '') {
            setMessage("Enter your answer! ⎛⎝>⏝⏝<⎛⎝");
            setMessageColor("orange");
            return;
        }
        setInputValue('');
        if (isCloseMatch(mode === 2 ? [PLACES[toFind][1]] : KANJI[toFind][mode + 1] as string[], answerValue, exact ? 0 : 1)) {
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

    const handleClick = (index: number) => {
        onAnswerSubmit(choices[index], true);
    }

    useEffect(() => {
        generateNewFind();
        setStreak(0);
        setBestStreak(localStorage.getItem(getStreakKey()) ? Number(getStreakKey()) : 0);
    }, [enableDirections, enablePhysicalAdjectives, enableColors, enableUrbanDescriptors, enableNaturalFeatures, enableOther, mode]);

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Kanji used in place names</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                Furigana<input type="radio" onChange={() => {setMode(0); setInputValue(''); if (mode === 2) { setToFind(0); setLastItems([]); } }} checked={mode === 0}></input>
                Meaning<input type="radio" onChange={() => {setMode(1); setInputValue(''); if (mode === 2) { setToFind(0); setLastItems([]); }}} checked={mode === 1}></input>
                Real places<input type="radio" onChange={() => {setMode(2); setInputValue(''); setLastItems([]);}} checked={mode === 2}></input>
                <span style={{float: 'right'}} >Multiple choice<input type="checkbox" onChange={() => {setMultipleChoice(!multipleChoice); setInputValue('');}} checked={multipleChoice}></input></span>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{marginTop: '10px', marginBottom: '20px'}}>
                Direction words<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(0)}} checked={enableDirections || (mode === 2)}></input>
                Physical adjectives<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(1)}} checked={enablePhysicalAdjectives || (mode === 2)}></input>
                Colors<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(2)}} checked={enableColors || (mode === 2)}></input>
                Urban descriptors<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(3)}} checked={enableUrbanDescriptors || (mode === 2)}></input>
                Natural features<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(4)}} checked={enableNaturalFeatures || (mode === 2)}></input>
                Other<input type="checkbox" disabled={mode === 2} onChange={() => {changeSetting(5)}} checked={enableOther || (mode === 2)}></input>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '186px'}} src={dots}></img>
            {multipleChoice ? <div>
                <p className='p-old'><span style={{textDecoration: 'underline'}}>Kanji:</span> {mode === 2 ? PLACES[toFind][0] : KANJI[toFind][0]}</p>
                <p>{`Click on the right ${mode === 0 ? 'furigana' : 'meaning'}!`} <input type='button' value='Skip' onClick={(event) => { giveUp(); }}></input></p>
                {choices.map((choice, index) => {
                    return (
                        <div style={{display: 'inline-block', width: '40%', margin: '10px', cursor: 'pointer'}} onClick={() => {handleClick(index);}} >
                            <p style={{display: 'inline'}}>{['A.', 'B.', 'C.', 'D.', 'E.', 'F.'][index]}</p>
                            <p style={{display: 'inline', marginLeft: '10px'}}>{choice}</p>
                        </div>
                    );
                })}
                {(message !== '') && <p style={{color: messageColor}}>{message}</p>}
            </div>
            : <div>
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
                    <p className='p-old'><span style={{textDecoration: 'underline'}}>Kanji:</span> {mode === 2 ? PLACES[toFind][0] : KANJI[toFind][0]}</p>
                </div>
            </div>
            }
            <div className='scrollable-content' style={{border: '1px dashed grey', padding: '5px', width: '410px', height: lastItems.length > 0 ? (lastItems.length <= 12 ? 'auto' : '236px') : '236px'}}>
                <p style={{margin: '0px', textDecoration: 'underline'}}>Previous Kanji: <span style={{float: 'right'}}>
                    Hide <input type="checkbox" onChange={() => {setBlurLastItems(!blurLastItems)}} checked={blurLastItems}></input>
                </span></p>
                <div style={{filter: blurLastItems ? 'blur(5px)' : 'none'}}>
                    <ul style={{margin: '0px', paddingInlineStart: '0px'}}>
                        {lastItems.map((item, index) => {
                            return (
                                <li key={index} style={{listStyleType: 'none'}}>
                                    {
                                        mode === 2 ?
                                        <span className='p-old'>{PLACES[item][0]}: {PLACES[item][1]}</span>
                                        :
                                        <span className='p-old'>{KANJI[item][0]}: {(KANJI[item][1] as string[]).join(',')}: {(KANJI[item][2] as string[]).join(',')}</span>
                                    }
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default Kanji;

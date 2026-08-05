import React from 'react';
import commentbubble from '../../assets/gifs/commentbubble.gif';

const CommentedImage = (props: { src: string, alt: string, style?: React.CSSProperties, comment?: string, commentColor?: string, hover?: boolean }) => {
    const [showComment, setShowComment] = React.useState(false);

    if (!props.hover) {
        return <div style={{position: 'relative', display: 'inline-block'}}>
            <img src={props.src} alt={props.alt} style={{...props.style}}></img>
            {props.comment && (
                <div style={{position: 'absolute', bottom: '5px', right: '10px'}}>
                    <img src={commentbubble} alt="comment" style={{imageRendering: 'pixelated', verticalAlign: 'middle'}}></img>
                    <span style={{color: props.commentColor, textAlign: 'right'}}>{props.comment}</span>
                </div>
            )}
        </div>;
    } else {
        return <div style={{position: 'relative', display: 'inline-block'}}>
            <img src={props.src} alt={props.alt} style={{...props.style}}></img>
            {props.comment && (
                <div
                    style={{position: 'absolute', bottom: '5px', right: '10px'}}
                    onMouseEnter={() => setShowComment(true)}
                    onMouseLeave={() => setShowComment(false)}
                    onFocus={() => setShowComment(true)}
                    onBlur={() => setShowComment(false)}
                    tabIndex={0}
                >
                    <img src={commentbubble} alt="comment" style={{imageRendering: 'pixelated', verticalAlign: 'middle'}}></img>
                    {showComment && (
                        <div style={{
                            position: 'absolute',
                            bottom: '100%',
                            right: '0',
                            marginBottom: '8px',
                            backgroundColor: 'white',
                            color: props.commentColor,
                            border: '1px solid black',
                            padding: '4px 6px',
                            width: 'max-content',
                            maxWidth: '300px',
                            textAlign: 'right',
                        }}>
                            {props.comment}
                            {/* tail: black outer triangle forms the border ... */}
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: '10px',
                                width: 0,
                                height: 0,
                                borderLeft: '7px solid transparent',
                                borderRight: '7px solid transparent',
                                borderTop: '7px solid black',
                            }}></div>
                            {/* ... white inner triangle sits 1px higher to mask its fill */}
                            <div style={{
                                position: 'absolute',
                                top: 'calc(100% - 1px)',
                                right: '11px',
                                width: 0,
                                height: 0,
                                borderLeft: '6px solid transparent',
                                borderRight: '6px solid transparent',
                                borderTop: '6px solid white',
                            }}></div>
                        </div>
                    )}
                </div>
            )}
        </div>;
    }
};

export default CommentedImage;
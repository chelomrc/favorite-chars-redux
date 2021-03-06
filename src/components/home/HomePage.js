import React from 'react';
import Card from '../card/Card';
import styles from './home.module.css';
import { connect } from 'react-redux';
import {removeCharacterAction, addTofavoritesAction} from '../../redux/charsDuck'

function Home({chars, removeCharacterAction, addTofavoritesAction}) {

    function renderCharacter() {
        let char = chars[0]
        return (
            <Card 
                leftClick={nextCharacter} 
                rightClick={addFavorites} 
                {...char} 
            />
        )
    }

    function nextCharacter(){
        removeCharacterAction();
    }

    function addFavorites(){
        addTofavoritesAction();
    }

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        chars: state.characters.array
    }
}

export default connect(mapStateToProps, {removeCharacterAction, addTofavoritesAction})(Home)
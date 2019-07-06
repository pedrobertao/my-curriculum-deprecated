
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import tl from '../../utils/translations'

const languageOptions = [
    { key: 'English', text: 'English', value: 'en' },
    { key: 'Portuguese', text: 'Português', value: 'pt' },
]

const LanguageDropdown = ({short}) => {
    const { text, value } = languageOptions.find(l => l.value === tl.locale)
    const onSelectLanguage = (_,data) => {
        const {  value } = languageOptions.find(l => data.value === l.value)
        window.localStorage.setItem('language', value)
        window.location.reload()
    }

    const dropdownStyle = {
        backgroundColor: 'eeeee',
        paddingVertical: 2,
        paddingHorizontal: 0
    }
    
    return (
        <Dropdown
        button
        className='icon'
        style={dropdownStyle}
        floating
        labeled
        icon='world'
        options={languageOptions}
        search
        onChange={onSelectLanguage}
        text={short ? value.toUpperCase() : text}
    />
    )
}

export default LanguageDropdown




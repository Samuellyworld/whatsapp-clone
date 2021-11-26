import React, { createContext, useState, useEffect } from 'react';

export const OptionsContext = createContext({
    hidden : true,
    toggleHidden : () => {}
})

const OptionsProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);

    const toggleHidden = () => setHidden(!hidden);

    return (
        <OptionsContext.Provider value={{hidden, toggleHidden}}>
          {children}
        </OptionsContext.Provider>

    )
}

export default OptionsProvider;
import {createContext} from 'react'

const appContext = createContext({
    isResumeOpen : false,
    handleResume : ()=>{}
})

export default appContext
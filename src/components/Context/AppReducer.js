const handleResume = ( state ) => !state.isResumeOpen



export default (state, action) => {
    switch(action.type){
        case "SHOW_RESUME":
            return handleResume(state)
        default:
            console.log("Nag")
            break
    }
}
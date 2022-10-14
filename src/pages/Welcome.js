import { Route, Routes } from 'react-router-dom'

function Welcome() {
    return (
        <div>
            <h1>Welcome component text</h1>
            <Routes>
            <Route 
                path='new-user' 
                element={<p>Welcome new user!</p>}
            />
            </Routes>
        </div>
    )
}

export default Welcome
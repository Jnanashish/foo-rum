import MainView from '../components/MainView'
import Modal from '../components/Modal'
import LoginForm from '../components/LoginForm'
import InfoToast from '../components/InfoToast'

const Home = () => {
    return (
        <div>
            <MainView />
            <Modal isOpen={false} onClose={() => { }}>
                <LoginForm />
            </Modal>
            <InfoToast />
        </div>
    )
}

export default Home;

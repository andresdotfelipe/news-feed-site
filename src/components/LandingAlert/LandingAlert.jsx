import { useState } from 'react';
import Alert from 'emerald-ui/lib/Alert';
import './LandingAlert.scss';

const LandingAlert = () => {
    const [showAlert, setShowAlert] = useState(true);

    return (
        showAlert &&
        <Alert onDismiss={() => setShowAlert(false)}>
            <p>Welcome to the new look of News.com. Keep scrolling to discover interesting new features and news.</p>            
        </Alert>
    );
}

export default LandingAlert;
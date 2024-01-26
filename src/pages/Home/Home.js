import {Button} from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import {StyledDefaultPage} from '../../style/layout/StyledDefaultPage';

function Home() {
    return (
    <StyledDefaultPage>

        <Button>Button</Button>
        <Input placeholder="Input" type="text"/>
    </StyledDefaultPage>
    );
}

export default Home;

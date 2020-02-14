import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
// import {action} from '@storybook/addon-actions';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/Button';
import {Dialog, DialogOverlay, DialogContent} from '../src';

const StyledDialogOverlay = styled(DialogOverlay)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.7)',
});

const StyledDialogContent = styled(DialogContent)({
  position: 'absolute',
  top: 'calc(50% - 250px)',
  left: 'calc(50% - 250px)',
  width: '500px',
  height: '500px',
  background: 'colorBackground',
  borderRadius: '10px',
});

function ModalSection() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <StyledDialogOverlay isOpen={isOpen} onDismiss={handleClose}>
        <StyledDialogContent>
          <Text color="colorText">Roll your own dialog!</Text>
        </StyledDialogContent>
      </StyledDialogOverlay>
    </div>
  );
}

export {ModalSection};

storiesOf('Primitives|Modal Dialog', module)
  .addDecorator(withKnobs)
  .add('All variant', () => {
    return <ModalSection />;
  });

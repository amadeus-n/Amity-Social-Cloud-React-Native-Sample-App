import React, { VFC } from 'react';
import { View } from 'react-native';
import { HelperText, Button } from 'react-native-paper';

import { t } from 'i18n';

import styles from './styles';

type EmptyComponentProps = { errorText?: string; onRetry?: () => void };

const EmptyComponent: VFC<EmptyComponentProps> = ({ errorText, onRetry }) => {
  const text = errorText && errorText !== '' ? errorText : t('no_result');

  return (
    <View style={styles.container}>
      <HelperText type={errorText !== '' ? 'error' : 'info'} style={styles.errorText}>
        {text}
      </HelperText>
      {onRetry && <Button onPress={onRetry}>{t('retry')}</Button>}
    </View>
  );
};

export default EmptyComponent;

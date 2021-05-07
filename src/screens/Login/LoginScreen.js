import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  form: {
    marginTop: 39,
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
  forgotPasswordButtonText: {
    color: '#3797EF',
    fontSize: 12,
  },
  loginButtonContainer: {
    backgroundColor: '#3797EF',
    borderRadius: 5,
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 37,
  },
  loginButtonText: {
    color: 'white',
  },
  facebookLoginContainer: {
    marginBottom: 41.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookLoginText: {
    fontWeight: '700',
    color: '#3797EF',
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 41.5,
  },
  separator: {
    borderWidth: 0.2,
    flex: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  separatorText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.4)',
    marginHorizontal: 30.5,
  },
  dontHaveAccount: {
    color: 'rgba(0,0,0,0.4)',
  },
  span: {
    color: '#3797EF',
  },
  footer: {
    borderTopWidth: 0.2,
    borderTopColor: 'rgba(0,0,0,0.4)',
    paddingTop: 32.5,
    paddingBottom: 18.5,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 12,
  },
});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.container}>
          <Image source={require('../../assets/images/InstagramLogo.png')} />

          <View style={styles.form}>
            <TextInput
              onChangeText={setEmail}
              placeholder="Email"
              style={[styles.input]}
            />
            <TextInput
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Password"
              style={[styles.input, {marginBottom: 19}]}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPasswordButtonText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Root', {
                screen: 'Home',
              });
            }}
            disabled={email && password ? false : true}
            style={[
              styles.loginButtonContainer,
              {
                opacity: email && password ? 1 : 0.4,
              },
            ]}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookLoginContainer}>
            <Image source={require('../../assets/images/FacebookLogo.png')} />
            <Text style={styles.facebookLoginText}>Log in with Facebook</Text>
          </TouchableOpacity>

          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.separatorText}>OR</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity>
            <Text style={styles.dontHaveAccount}>
              Don’t have an account? <Text style={styles.span}>Sign up.</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Instagram от Facebook</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import {styles} from '@/styles/_joinstyle';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        {/* section 1 */}
        <view style={styles.iconsection}>
        <Ionicons name="arrow-back" size={25} />
        <Image source={require('@/assets/images/logo-green.png')} />
        </view>
        
        {/* section 2 */}
        <Text style={styles.titleText}>Sign in to your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
        </Text>

        {/* section 3 */}
        <view style={styles.formGroup}>
          <view>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.formControl} />
          </view>

          {/* view inside another view(nested) */}
          <view style={{ marginTop: 20 }}>
          <Text style={styles.formPasswordControl}>Password</Text>
         
          {/* section 4 */}

          <View style={styles.passwordControl}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
            </view>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </view>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        <View style={styles. secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText} >join</Text>
          </TouchableOpacity>
          
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

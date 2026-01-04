import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function SetPassword() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>

      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 28, fontWeight: "700" }}>
          Let’s Set Up Your Password 🔐
        </Text>
      </View>

      {/* Password Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#E0E0E0",
          borderRadius: 14,
          paddingHorizontal: 14,
          marginTop: 40,
        }}
      >
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={{
            flex: 1,
            paddingVertical: 16,
            fontSize: 16,
          }}
        />
        <MaterialIcons name="visibility-off" size={22} color="#999" />
      </View>

      <Text style={{ color: "#777", marginTop: 10 }}>
        Please make the password strong
      </Text>

      {/* Continue */}
      <Link href="/set-password-success" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            padding: 18,
            borderRadius: 16,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Back */}
      <View style={{ marginTop: 18, alignItems: "center" }}>
        <Link href="/otp-confirmation">
          <Text style={{ color: "#5B4CF5" }}>Back</Text>
        </Link>
      </View>

    </View>
  );
}

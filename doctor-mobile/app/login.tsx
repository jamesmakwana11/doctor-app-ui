import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 30, fontWeight: "700", marginTop: 80 }}>
        Let’s Sign In
      </Text>

      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          borderRadius: 14,
          padding: 16,
          marginTop: 40,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderRadius: 14,
          padding: 16,
          marginTop: 16,
        }}
      />

      {/* LOGIN → DASHBOARD */}
      <Link href="/dashboard" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            padding: 18,
            borderRadius: 16,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

      {/* FORGOT PASSWORD */}
      <View style={{ alignItems: "center", marginTop: 18 }}>
        <Link href="/forgot-password">
          <Text style={{ color: "#5B4CF5" }}>
            Forgot Password (Temp)
          </Text>
        </Link>
      </View>
    </View>
  );
}

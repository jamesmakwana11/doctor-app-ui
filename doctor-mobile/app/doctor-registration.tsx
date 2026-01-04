import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function DoctorRegistration() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 20,
          width: "85%",
        }}
      >
        {/* Title */}
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 16 }}>
          Doctor Registration
        </Text>

        {/* Verification Box */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#E8F7EE",
            padding: 14,
            borderRadius: 14,
            marginBottom: 20,
          }}
        >
          <MaterialIcons name="verified-user" size={26} color="#2E7D32" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "700", color: "#2E7D32" }}>
              Get Verified
            </Text>
            <Text style={{ color: "#2E7D32", fontSize: 13 }}>
              Verify your identity to gain trust and credibility
            </Text>
          </View>
        </View>

        {/* Digilocker */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 14,
            paddingVertical: 14,
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Verify with Digilocker
          </Text>
        </TouchableOpacity>

        {/* Submit */}
        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            Submit
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text
          style={{
            fontSize: 12,
            color: "#777",
            textAlign: "center",
            marginTop: 14,
          }}
        >
          By proceeding, you agree to our Privacy Policy & Terms
        </Text>
      </View>
    </View>
  );
}

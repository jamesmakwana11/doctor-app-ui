import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileManagement() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
      
      {/* Header */}
      <View style={{ marginTop: 60, marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "700" }}>
          Profile Management
        </Text>
        <Text style={{ color: "#777", marginTop: 6 }}>
          Complete your profile details
        </Text>
      </View>

      {/* Profile Avatar */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
            borderWidth: 1,
            borderColor: "#E0E0E0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="add-a-photo" size={28} color="#999" />
        </View>

        <Text style={{ marginTop: 10, fontWeight: "600" }}>
          Upload Photo
        </Text>
      </View>

      {/* Inputs */}
      {[
        "Search Your Category",
        "Enter Designation",
        "Enter Degrees",
        "Enter Languages",
        "Years of Experience",
        "Consultation Fees",
      ].map((placeholder, index) => (
        <TextInput
          key={index}
          placeholder={placeholder}
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 14,
            padding: 16,
            marginBottom: 16,
            fontSize: 16,
          }}
        />
      ))}

      {/* Continue Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#5B4CF5",
          paddingVertical: 18,
          borderRadius: 16,
          marginTop: 10,
          marginBottom: 40,
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

    </ScrollView>
  );
}

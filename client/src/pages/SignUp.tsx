import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const schools = [
  "Montgomery Blair High School",
  "Albert Einstein High School",
  "Paint Branch High School",
  "Springbrook High School",
  "James Hubert Blake High School",
];

export default function SignUp() {
  const [registrationType, setRegistrationType] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const handleSignUp = () => {
    if (registrationType === "volunteer") {
      window.open("https://external-volunteer-signup.com", "_blank", "noopener,noreferrer");
    } else if (registrationType === "child" && selectedSchool) {
      window.open(`https://external-student-signup.com?school=${encodeURIComponent(selectedSchool)}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-20 bg-gray-50">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Join Our Program</h1>
            <p className="mt-4 text-gray-600">
              Select your registration type and follow the prompts to complete your signup.
            </p>
          </div>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Registration Type</label>
              <Select
                value={registrationType}
                onValueChange={(value) => {
                  setRegistrationType(value);
                  setSelectedSchool("");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select registration type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="child">Child Registration</SelectItem>
                  <SelectItem value="volunteer">Volunteer Registration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {registrationType === "child" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Select School</label>
                <Select
                  value={selectedSchool}
                  onValueChange={setSelectedSchool}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your school" />
                  </SelectTrigger>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem key={school} value={school}>
                        {school}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              className="w-full"
              onClick={handleSignUp}
              disabled={!registrationType || (registrationType === "child" && !selectedSchool)}
            >
              Continue to Registration
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

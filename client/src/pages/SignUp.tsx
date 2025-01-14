import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const schools = [
  "Brown Station Elementary School", "https://docs.google.com/forms/d/e/1FAIpQLScXuMY2d6_OBRrzxu9kzj3RuZ21ahqGowXaiu8TS9ulhW-uIA/viewform?usp=preview",
  "Clopper Mill Elementary",
  "https://external-student-signup.com/clopper-mill",
  "Gaithersburg Elementary School",
  "https://external-student-signup.com/gaithersburg"
];

export default function SignUp() {
  const [registrationType, setRegistrationType] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const handleSignUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (registrationType === "volunteer") {
      window.open("https://docs.google.com/forms/d/1soRY6YOasIm9xJDj2v3-lhkZxu6SFSBbRepi6iJ-avg/preview", "_blank", "noopener,noreferrer");
    } else if (registrationType === "child" && selectedSchool) {
      // Find the link for the selected school (it's at index + 1)
      const schoolIndex = schools.findIndex((item, index) => index % 2 === 0 && item === selectedSchool);
      const schoolLink = schools[schoolIndex + 1];
      window.open(schoolLink, "_blank", "noopener,noreferrer");
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

          <Card className="p-6">
            <div className="space-y-6">
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
                      {schools.filter((_, index) => index % 2 === 0).map((school) => (
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
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
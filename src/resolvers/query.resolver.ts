import { QueryResolvers } from "../types/graphql";

import { Allergies } from "../models/allergies";
import { BloodGroup } from "../models/blood_group";
import { Doctors } from "../models/doctor";
import { Patient } from "../models/patient";
import { Prescription } from "../models/prescriptions";
import { Tests } from "../models/tests";
import { Visits } from "../models/visits";

export const Query: QueryResolvers = {
  blood_groups: () => {
    return BloodGroup.findAll();
  },
  allergies: () => {
    return Allergies.findAll();
  },
  tests: () => {
    return Tests.findAll();
  },
  prescription: () => {
    return Prescription.findAll();
  },
  visits: () => {
    return Visits.findAll();
  },
  patients: () => {
    return Patient.findAll();
  },
  doctors: () => {
    return Doctors.findAll();
  },
  visits_by_doctor: (_, arg) => {
    return Visits.findAll({
      where: {
        doctor_visited: arg.id,
      },
    });
  },
};

import { defineComponent, ref, getCurrentInstance } from "vue";

interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: "",
  password: ""
});

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}

export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "Email is incorrect ...",
      required: true,
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "passworrd coudndfd", trigger: "blur" },
    { min: 6, max: 30, message: "passwer 6 to 30", trigger: "blur" }
  ]
});

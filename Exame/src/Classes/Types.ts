interface StudentProps {
    id: number;
    name: string;
  }
  
  interface TeacherProps extends StudentProps {
    age: number;
  }
  
  export { StudentProps, TeacherProps };
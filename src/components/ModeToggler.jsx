import { React, useState, useEffect } from "react";
import { Button, useColorScheme } from "@mui/joy";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export default function ModeToggler() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant='soft'
      color='neutral'
      size='sm'
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? (
        <ModeNightIcon fontSize='small' />
      ) : (
        <LightModeIcon fontSize='small' />
      )}
    </Button>
  );
}

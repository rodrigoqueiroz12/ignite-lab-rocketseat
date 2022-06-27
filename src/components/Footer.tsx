import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {
  return (
    <div className="w-full flex-1 flex flex-col gap-7 md:flex-row items-center bg-gray-900 p-7 md:py-5">
      <RocketseatLogo />
      <span className="text-md text-gray-300">Rocketseat - Todos os direitos reservados</span>
      <span className="text-md text-gray-300 md:flex-1 text-end">Políticas de privacidade</span>
    </div>
  );
}

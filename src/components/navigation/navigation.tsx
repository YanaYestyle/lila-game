import Button from "@/components/button/Button";
import ArrowIcon from "@/components/arrow-icon/ArrowIcon";
import nav from "./Navigation.module.scss";
import { NavigationConfig } from "@/models/navigation";

export default function Navigation({
  config,
  ...props
}: {
  config: NavigationConfig;
}) {
  return (
    <div className={nav.container}>
      {config.buttons.map((button, index) => (
        <div className={nav.content} key={index}>
          <Button
            variant={button.variant && button.variant}
            onClick={button.navigateTo}
            {...props}
          >
            <div>
              <span>{button.text && button.text} </span>
              {button.icon && (
                <span>
                  <ArrowIcon></ArrowIcon>
                </span>
              )}
            </div>
          </Button>
          <div className={nav.text}> {config.additionalText} </div>
        </div>
      ))}
    </div>
  );
}

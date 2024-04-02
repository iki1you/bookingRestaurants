"use client";

import React, { ReactNode, useEffect } from "react";
import ModalTitle from "@/components/shared/modal/components/modalTitle/ModalTitle";
import styles from "./modal.module.scss";
import Portal from "@/hoc/Portal";
import ModalWindow from "@/components/shared/modal/components/modalWindow/ModalWindow";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ModalProps = {
  children?: ReactNode;
  state: string;
};

const Modal = ({ children, state }: ModalProps) => {
  const paramsState = useSearchParams().get("state");
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push(path, { scroll: false });
      }
    };

    if (paramsState === state) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [paramsState, router, state]);

  return (
    paramsState === state && (
      <>
        <Portal>
          <div
            className={styles.wrapper}
            onClick={() => router.push(path, { scroll: false })}
          >
            <div
              className={styles.content}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </Portal>
      </>
    )
  );
};

Modal.Title = ModalTitle;
Modal.Window = ModalWindow;

export default Modal;

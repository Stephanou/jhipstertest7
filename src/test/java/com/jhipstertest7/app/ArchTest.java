package com.jhipstertest7.app;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.jhipstertest7.app");

        noClasses()
            .that()
            .resideInAnyPackage("com.jhipstertest7.app.service..")
            .or()
            .resideInAnyPackage("com.jhipstertest7.app.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.jhipstertest7.app.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}

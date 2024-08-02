// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// import { AzureWizardPromptStep, IWizardOptions } from '@microsoft/vscode-azext-utils';
// import { ChoosePortsStep } from '../ChoosePortsStep';
// import { ScaffoldingWizardContext } from '../ScaffoldingWizardContext';
// import { ChooseJavaArtifactStep } from './ChooseJavaArtifactStep';
// import { JavaGatherInformationStep } from './JavaGatherInformationStep';

// export interface JavaScaffoldingWizardContext extends ScaffoldingWizardContext {
//     relativeJavaOutputPath?: string;
// }

// export function getJavaSubWizardOptions(wizardContext: ScaffoldingWizardContext): IWizardOptions<JavaScaffoldingWizardContext> {
//     const promptSteps: AzureWizardPromptStep<JavaScaffoldingWizardContext>[] = [
//         new ChooseJavaArtifactStep(),
//         new ChoosePortsStep([3000]),
//         new JavaGatherInformationStep(),
//     ];

//     return {
//         promptSteps: promptSteps,
//     };
// }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureWizardPromptStep, IWizardOptions } from '@microsoft/vscode-azext-utils';
import { ChoosePortsStep } from '../ChoosePortsStep';
import { ScaffoldingWizardContext } from '../ScaffoldingWizardContext';
import { ChooseFlutterArtifactStep } from './ChooseFlutterArtifactStep';
import { FlutterGatherInformationStep } from './FlutterGatherInformationStep';

export interface FlutterScaffoldingWizardContext extends ScaffoldingWizardContext {
    relativeFlutterOutputPath?: string;
}

export function getFlutterSubWizardOptions(wizardContext: ScaffoldingWizardContext): IWizardOptions<FlutterScaffoldingWizardContext> {
    const promptSteps: AzureWizardPromptStep<FlutterScaffoldingWizardContext>[] = [
        new ChooseFlutterArtifactStep(),
        new ChoosePortsStep([8080]), // Example port for Flutter
        new FlutterGatherInformationStep(),
    ];

    return {
        promptSteps: promptSteps,
    };
}

